import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Modal, Space, Tag, Divider, Input } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './UserWindow.css';
import { userModal } from '../../constants/constants';
import createMap from '../map/map';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';
import { selectColor } from '../../utils/selectColor';

const {
  MODAL_TITLE,
  ONLINE,
  DATE_FORMAT,
  TASK_DESCTIPTION,
  LOCATION,
  URL_DESCTIPTION,
  COMMENT
} = userModal;

const UserWindow = (props) => {
  const { Search } = Input;
  const { isFeedback } = props;
  const dispatch = useDispatch();
  const visible = useSelector(state => state.modalWindowReducer.userModalWindowVisability);
  const event = useSelector(state => state.permanentEventReducer.permanentEvent);
  const [needMap, setNeedMap] = useState(false);
  const [location, setLocation] = useState(null);
  const { RangePicker } = DatePicker;
  const isImpairedVersion = useSelector(state => state.optionsReducer.impairedVersion);
  function handleCancel() {
    dispatch(actionCreator.changeUserModalWindowVisible(!visible));
    setNeedMap(false);
  };

  useEffect(() => {
    if (event && event.place.length) {
      setNeedMap(true);
      const parsePlase = JSON.parse(event.place);
      createMap(parsePlase.town, parsePlase.typeStreet, parsePlase.streetName, parsePlase.buildingNbr).then(location => setLocation(location));
    }
  }, [event]);
  const mapData = {
    center: (location) ? [location.latitude, location.longitude] : '',
    zoom: 15,
  };

  function saveComment() {
    dispatch(actionCreator.addComment());
  }
  
  const getPlaceAddress = (place) => {
    const placeObj = JSON.parse(place);
    return `${placeObj.town}, ${placeObj.streetName}, ${placeObj.buildingNbr}`;
  };

  return ((event == null) ? '' : (
    <>
      <Modal
        title={MODAL_TITLE}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        className={isImpairedVersion ? 'impairedVersion' : ''}
      >
        <Space align='center' className='task'>
          <h2>{event.name}</h2>
          {
            !event.currentDeadlineDate
              ? <DatePicker
                value={moment(event.currentDate + ' ' + event.currentTime, DATE_FORMAT)}
                disabled
                format={DATE_FORMAT}
              />
              : <RangePicker
                value={[
                  moment(event.currentDate + ' ' + event.currentTime, DATE_FORMAT),
                  moment(event.currentDeadlineDate + ' ' + event.currentDeadlineTime, DATE_FORMAT)
                ]}
                disabled
                format={DATE_FORMAT}
              />
          }
        </Space>
        <Tag color={selectColor(event.type)} key={event.type}>
          {event.type}
        </Tag>
        <div className='task-description'>
          <Divider orientation='left'>{TASK_DESCTIPTION}</Divider>
          <p>{event.description}</p>
          <a
            href={event.descriptionUrl}
            target='_blank'
            rel='noopener noreferrer'
          >{URL_DESCTIPTION}</a>
        </div>

        <div className='map-box'>
          <Divider orientation='left'>{LOCATION}</Divider>
          {(needMap) ?
              <div>
              <p>{getPlaceAddress(event.place)}</p>
              <YMaps query={{ load: 'package.full' }}>
                <Map defaultState={mapData} state={mapData}>
                  <Placemark geometry={mapData.center} properties={mapData.center} />
                </Map>
              </YMaps>
              
              </div>
            : <b>{ONLINE}</b>}
        </div>
              <div>
                {(!isFeedback) ? '' : (
                  <div>
                    <Divider orientation='left'>{COMMENT}</Divider>
                    <Search placeholder="Leave a comment..." onSearch={saveComment} enterButton="Save" />
                  </div>)}
              </div>
            </Modal>
    </>
  ));
};

export default UserWindow;