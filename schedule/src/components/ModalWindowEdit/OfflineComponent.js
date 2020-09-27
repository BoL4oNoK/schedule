import React, { useEffect, useState } from "react";
import { Col, Select, Input, Button } from "antd";
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import { map } from "../../constants/constants";
import createMap from "../map/map";
import Form, { useForm } from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import { useSelector } from "react-redux";
const { Option, OptGroup } = Select;

const OfflineComponent = ({
  MENTOR_MODAL,
  onOfflineInputTypeEvent,
  onOfflineSelectTypeEvent,
  onOfflineSubmit,
}) => {
  const permanentEvent = useSelector((state) => {
    return state.permanentEventReducer.permanentEvent;
  });
  const getValuesForMap = () => {
    if (permanentEvent?.place) {
      const place = JSON.parse(permanentEvent.place);
      editForm.setFieldsValue({
        town: place.town,
        typeStreet: place.typeStreet,
        streetName: place.streetName,
        buildingNbr: place.buildingNbr,
        additionalAddressInfo: place?.additionalAddressInfo,
      });
      updateMap();
    }
  };
  useEffect(() => {
    editForm.resetFields();
    getValuesForMap();
  }, [permanentEvent]);

  const [mapCoord, setmapCoord] = useState([53.868833, 27.596686]);
  const updateMap = async () => {
    if (
      editForm.getFieldValue("town") &&
      editForm.getFieldValue("streetName") &&
      editForm.getFieldValue("buildingNbr")
    ) {
      const coordObj = await createMap(
        editForm.getFieldValue("town"),
        "улица",
        editForm.getFieldValue("streetName"),
        editForm.getFieldValue("buildingNbr")
      );
      setmapCoord([+coordObj.latitude, +coordObj.longitude]);
    }
  };
  const [editForm] = useForm();
  return (
    <div>
      <Form
        form={editForm}
        name="basic"
        style={{ display: "flex", flexWrap: "nowrap" }}
        onLoad={getValuesForMap}
        className="edit-offline"
      >
        <Col
          span={12}
          style={{ marginTop: "1rem" }}
          className="edit-offline-description"
        >
          <FormItem name="town" onChange={updateMap}>
            <Input
              placeholder="Town"
              style={{ marginBottom: "5px" }}
              attr="town"
              onChange={onOfflineInputTypeEvent}
            />
          </FormItem>
          <FormItem name="streetName" onChange={updateMap}>
            <Input
              placeholder="Street"
              value={permanentEvent.place}
              style={{ marginBottom: "5px" }}
              attr="streetName"
              onChange={onOfflineInputTypeEvent}
            />
          </FormItem>
          <FormItem name="buildingNbr" onChange={updateMap}>
            <Input
              placeholder="№ of house"
              attr="buildingNbr"
              onChange={onOfflineInputTypeEvent}
            />
          </FormItem>
          <FormItem name="additionalAddressInfo">
            <Input
              placeholder="additional Address Info"
              attr="additionalAddressInfo"
              onChange={onOfflineInputTypeEvent}
            />
          </FormItem>
        </Col>
        <Col
          span={12}
          style={{ margin: "1rem 0 0 1rem" }}
          className="container-map edit-offline-map"
        >
          <YMaps query={{ apikey: map.KEY }}>
            <Map
              defaultState={{
                center: mapCoord,
                zoom: 9,
              }}
              state={{
                center: mapCoord,
                zoom: 9,
              }}
              width="100%"
              height="100%"
            >
              <Placemark
                geometry={mapCoord}
                options={{
                  draggable: true,
                  fillColor: "#DB709377",
                  strokeColor: "#990066",
                  strokeOpacity: 0.8,
                  strokeWidth: 5,
                }}
              />
              <GeolocationControl options={{ float: "left" }} />
              <FullscreenControl />
              <ZoomControl options={{ float: "right" }} />
            </Map>
          </YMaps>
        </Col>
      </Form>
    </div>
  );
};

export default OfflineComponent;
