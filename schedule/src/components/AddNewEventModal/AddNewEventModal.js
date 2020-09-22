import React, { useState } from "react";
import {
  Row,
  Col,
  Select,
  Input,
  DatePicker,
  Modal,
  Button,
  Checkbox,
} from "antd";
import "antd/dist/antd.css";
import "./ModalWindow.scss";
import {
  MENTOR_MODAL,
  TASKS_TYPES,
  TIME_ZONES,
  userModal,
} from "./../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../../store/actions";
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

function getTasks(TASKS_TYPES) {
  return TASKS_TYPES.map((el) => {
    return (
      <Option value={el} key={el}>
        {el}
      </Option>
    );
  });
}

function getTimeZones(TIME_ZONES) {
  return TIME_ZONES.map((el) => {
    return (
      <Option value={el.name} key={el.name}>
        {el.name}({el.value})
      </Option>
    );
  });
}
const { Option, OptGroup } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const AddNewEventModal = () => {
  const timeZone = useSelector((state) => state.optionsReducer.timeZone);
  const { DATE_FORMAT } = userModal;
  const dispatch = useDispatch();
  const [isOfflineEvent, setIsOfflineEvent] = useState(false);
  const [isEventWithDeadline, setisEventWithDeadline] = useState(true);
  const visible = useSelector(
    (state) => state.modalWindowReducer.AddNewEventModalVisability
  );
  const [mapCoord, setmapCoord] = useState([53.868833, 27.596686]);
  const onEventLocationChange = (e) => {
    if (e === "online") {
      setIsOfflineEvent(false);
    } else {
      setIsOfflineEvent(true);
    }
  };
  const onEventDeadlineChange = (e) => {
    form.setFieldsValue({ currentDate: null });
    setisEventWithDeadline(e.target.checked);
  };
  const onFinish = async (values) => {
    const resEvent = {
      id: "0000",
      name: values.name,
      description: values.description,
      descriptionUrl: values.descriptionUrl,
      type: values.type,
      timeZone: values.timeZone,
      dateTime: Array.isArray(values.currentDate)
        ? `${values.currentDate[0].year()}-${values.currentDate[0].month()}-${values.currentDate[0].date()} ${values.currentDate[0].hours()}:${values.currentDate[0].minutes()}`
        : `${values.currentDate.year()}-${values.currentDate.month()}-${values.currentDate.date()} ${values.currentDate.hours()}:${values.currentDate.minutes()}`,
      place: !isOfflineEvent
        ? ""
        : JSON.stringify({
            town: values.town,
            typeStreet: "улица",
            streetName: values.streetName,
            buildingNbr: values.buildingNbr,
          }),
      comment: "",
      organizer: "kate-latushkina",
      deadlineDateTime: Array.isArray(values.currentDate)
        ? `${values.currentDate[1].year()}-${values.currentDate[1].month()}-${values.currentDate[1].date()} ${values.currentDate[1].hours()}:${values.currentDate[1].minutes()}`
        : "",
    };
    if (isOfflineEvent) {
      const coordObj = await createMap(
        values.town,
        values.typeStreet,
        values.streetName,
        values.buildingNbr
      );
      console.log(coordObj);
      setmapCoord([+coordObj.latitude, +coordObj.longitude]);
      console.log(mapCoord);
    }
    console.log(resEvent, values);
  };
  const handleCancel = () => {
    dispatch(actionCreator.AddNewEventModalVisability(!visible));
  };

  const [form] = useForm();

  return (
    <Modal visible={visible} footer={null} onCancel={handleCancel}>
      <h2 className="wrapper-modal-edit__header">Add new event</h2>
      <Form form={form} onFinish={onFinish} name="basic">
        <Row gutter={16} style={{ marginTop: "1rem" }}>
          <Col span={6} style={{ marginLeft: "2rem" }}>
            <FormItem
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input Task Name!",
                },
              ]}
            >
              <Input placeholder="Task Name" />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem
              name="type"
              rules={[
                {
                  required: true,
                  message: "Please select Task type!",
                },
              ]}
            >
              <Select style={{ width: 200 }}>
                <OptGroup label="TaskTitle">{getTasks(TASKS_TYPES)}</OptGroup>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <FormItem name="description">
            <TextArea rows={5} placeholder="Task Description" />
          </FormItem>
        </Col>

        <Row style={{ marginTop: "1rem" }}>
          <Col span={8} style={{ marginLeft: "2rem" }}>
            <FormItem name="timeZone" initialValue={timeZone}>
              <Select style={{ width: 200 }}>
                <OptGroup label="Timezones">
                  {getTimeZones(TIME_ZONES)}
                </OptGroup>
              </Select>
            </FormItem>
          </Col>
          <Checkbox onChange={onEventDeadlineChange} defaultChecked>
            Task with deadline?
          </Checkbox>
          <Col span={14}>
            <FormItem
              name="currentDate"
              rules={[
                {
                  required: true,
                  message: "Please input Task Date!",
                },
              ]}
              onChange={console.log(form.currentDate)}
            >
              {isEventWithDeadline ? (
                <RangePicker
                  style={{ marginLeft: "2rem" }}
                  showTime={{
                    hideDisabledOptions: true,
                  }}
                  format={DATE_FORMAT}
                />
              ) : (
                <DatePicker
                  style={{ marginLeft: "2rem" }}
                  showTime={{
                    hideDisabledOptions: true,
                  }}
                  format={DATE_FORMAT}
                />
              )}
            </FormItem>
          </Col>
        </Row>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <FormItem name="descriptionUrl">
            <Input placeholder="Additional url" />
          </FormItem>
        </Col>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <FormItem name="place">
            <Select
              placeholder="Online/Offline"
              style={{ width: 200 }}
              onChange={onEventLocationChange}
            >
              <OptGroup label="Place">
                <Option value="online">{MENTOR_MODAL.isOnline.online}</Option>
                <Option value="offline">{MENTOR_MODAL.isOnline.offline}</Option>
              </OptGroup>
            </Select>
          </FormItem>

          {isOfflineEvent && (
            <Row>
              <Col span={12} style={{ marginTop: "1rem" }}>
                <FormItem name="town">
                  <Input placeholder="Town" style={{ marginBottom: "5px" }} />
                </FormItem>
                <FormItem name="streetName">
                  <Input placeholder="Street" style={{ marginBottom: "5px" }} />
                </FormItem>
                <FormItem name="buildingNbr">
                  <Input placeholder="№ of house" />
                </FormItem>
              </Col>
              <Col>
                <YMaps query={{ apikey: map.KEY }}>
                  <div>
                    <Map
                      defaultState={{
                        center: mapCoord,
                        zoom: 9,
                      }}
                      state={{
                        center: mapCoord,
                        zoom: 9,
                      }}
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
                        onDragEnd={(e) =>
                          console.log(e.get("target").geometry.getCoordinates())
                        }
                      />
                      <GeolocationControl options={{ float: "left" }} />
                      <FullscreenControl />
                      <ZoomControl options={{ float: "right" }} />
                    </Map>
                  </div>
                </YMaps>
              </Col>
            </Row>
          )}
        </Col>
        <FormItem className="ant-modal-footer">
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default AddNewEventModal;
