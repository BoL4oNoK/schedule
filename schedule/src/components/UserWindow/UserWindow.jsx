import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Modal, Button } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './UserWindow.css';


const UserWindow = () => {
  const [visible, setVisible] = useState(true);   //если использовать showModal и Button, то тут будет false по-умолчанию
  const [needMap, setNeedMap] = useState(true);   //если false значит online
  const dateFormat = 'DD-MM-YYYY';
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

  const key = '4a07d892-7c5e-4508-8c23-e8d6632ff3d9';
  fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${key}&geocode=${town},+${isStreet}+${street},+дом+${house}`)
  .then((resp) => resp.json())
  .then((data) => {
    const location = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
    const position = location.split(' ').reverse();
    mapData.center[0] = position[0];
    mapData.center[1] = position[1];
  });

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title="Задание"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="task">
          <p>Название таска</p>
          <span>codewars</span>
          <RangePicker
            defaultValue={[moment('05-07-2020', dateFormat), moment('15-07-2020', dateFormat)]}
            disabled
            format={dateFormat}
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
            : <p>Online</p>}

        </div>
      </Modal>
    </>
  );
};

export default UserWindow;