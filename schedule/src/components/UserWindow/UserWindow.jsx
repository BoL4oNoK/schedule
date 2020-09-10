import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Modal, Button } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './UserWindow.css';
import {userModal} from '../../constants/constants';
import createMap from '../Map/Map';

const {
  MODAL_TITLE,
  ONLINE,
  DATE_FORMAT,
} = userModal;

const UserWindow = () => {
  const [visible, setVisible] = useState(true);   //если использовать showModal и Button, то тут будет false по-умолчанию
  const [needMap, setNeedMap] = useState(true);   //если false значит online
  const { RangePicker } = DatePicker;
  // function showModal() {
  //   setVisible(true);
  // };

  function handleCancel(e) {
    setVisible(false);
  };

  const town = 'Минск';
  const isStreet = 'улица';
  const street = 'Якубова';
  const house = '66';
  let mapData = {
    center: ['55.750768', '37.583508'],
    zoom: 15,
  };
  
  const location = createMap(town,isStreet,street,house).then(console.log);

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
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
          {(needMap) ?
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