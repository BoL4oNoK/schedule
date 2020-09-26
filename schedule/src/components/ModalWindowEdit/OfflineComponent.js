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
      >
        <Col span={12} style={{ marginTop: "1rem" }}>
          <FormItem name="town" onChange={updateMap}>
            <Input
              placeholder="Town"
              style={{ marginBottom: "5px" }}
              attr="town"
              onChange={onOfflineInputTypeEvent}
            />
          </FormItem>
          <Select
            defaultValue="Type of street"
            style={{ width: 200, marginBottom: "5px" }}
            onChange={onOfflineSelectTypeEvent}
          >
            <OptGroup label="Type">
              <Option value="проспект">{MENTOR_MODAL.streetType.avenue}</Option>
              <Option value="улица">{MENTOR_MODAL.streetType.street}</Option>
              <Option value="переулок">{MENTOR_MODAL.streetType.lane}</Option>
            </OptGroup>
          </Select>
          <FormItem name="streetName" onChange={updateMap}>
            <Input
              placeholder="Street"
              value={permanentEvent.place}
              style={{ marginBottom: "5px" }}
              attr="street"
              onChange={onOfflineInputTypeEvent}
            />
          </FormItem>
          <FormItem name="buildingNbr" onChange={updateMap}>
            <Input
              placeholder="№ of house"
              attr="house"
              onChange={onOfflineInputTypeEvent}
            />
          </FormItem>
          <Button
            type="primary"
            onClick={onOfflineSubmit}
            style={{ marginTop: "5px" }}
          >
            Set Address
          </Button>
        </Col>
        <Col span={12} className="container-map">
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
