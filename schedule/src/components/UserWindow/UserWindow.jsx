import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Modal } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './UserWindow.css';
import {userModal} from '../../constants/constants';
import createMap from '../map/map';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';

const {
  MODAL_TITLE,
  ONLINE,
  DATE_FORMAT,
} = userModal;

const UserWindow = () => {
  const dispatch = useDispatch();
  const visible = useSelector(state => state.modalWindowReducer.userModalWindowVisability);
  const event = useSelector(state => state.permanentEventReducer.permanentEvent);

  const [needMap, setNeedMap] = useState(true);   //если false значит online
  const { RangePicker } = DatePicker;
  
  function handleCancel() {
    dispatch(actionCreator.changeUserModalWindowVisible(!visible));
  };
  
  const town = 'Минск';
  const isStreet = 'улица';
  const street = 'Якубова';
  const house = '66';

  const [location , setLocation] = useState(null);
   useEffect( () => {
     createMap(town,isStreet,street,house).then(location => setLocation(location));
   }, [] );

  const mapData = {
    center: (location !== null) ? [location.latitude, location.longitude] : ['55.750768', '37.583508'],
    zoom: 15,
  };

  return (
    <>
      <Modal
        title={MODAL_TITLE}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="task">
          <p>Название таска</p>
          <span>codewars</span>
          <RangePicker
            defaultValue={[moment('05-07-2020 14-00', DATE_FORMAT), moment('15-07-2020 23-59', DATE_FORMAT)]}
            disabled
            format={DATE_FORMAT}
          />
        </div>
        <div className='task-description'>
          <b>Описание таска</b>
          <p>....</p>
          <a>URL</a>
        </div>

        <div>
          {(needMap && location !== null) ?
            <YMaps query={{ load: 'package.full' }}>
              <Map defaultState={mapData} >
                <Placemark geometry={mapData.center} properties={mapData.center} />
              </Map>
            </YMaps>
            : <p>{ONLINE}</p>}
        </div>
      </Modal>
    </>
  );
};

export default UserWindow;