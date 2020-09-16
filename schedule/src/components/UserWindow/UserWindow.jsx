import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Modal, Space, Tag, Divider } from 'antd';
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
  URL_DESCTIPTION
} = userModal;

const UserWindow = () => {
  const dispatch = useDispatch();
  const visible = useSelector(state => state.modalWindowReducer.userModalWindowVisability);
  const event = useSelector(state => state.permanentEventReducer.permanentEvent);
  const [needMap, setNeedMap] = useState(false);
  const [location, setLocation] = useState(null);
  const { RangePicker } = DatePicker;

  function handleCancel() {
    dispatch(actionCreator.changeUserModalWindowVisible(!visible));
  };

  if (event !== null) {
    if (event.place.length !== 0) {
      setNeedMap(true);
    }
  }

  
  // const town = 'Минск';
  // const isStreet = 'улица';
  // const street = 'Якубова';
  // const house = '66';
  // useEffect(() => {
  //   createMap(town, isStreet, street, house).then(location => setLocation(location));
  // }, []);
  const mapData = {
    center: (location !== null) ? [location.latitude, location.longitude] : '',
    zoom: 15,
  };

  return ((event == null) ? '' : (
    <>
      <Modal
        title={MODAL_TITLE}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
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
          {(needMap && location !== null) ?
            <YMaps query={{ load: 'package.full' }}>
              <Map defaultState={mapData} >
                <Placemark geometry={mapData.center} properties={mapData.center} />
              </Map>
            </YMaps>
            : <b>{ONLINE}</b>}
        </div>
      </Modal>
    </>
  ));
};

export default UserWindow;