import React, { useState, useCallback, useRef } from "react";
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
  SearchControl,
} from "react-yandex-maps";
import { map } from "../../constants/constants";
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
function dateFormatReadable(dateTime) {
  const m =
    dateTime.getMonth() + 1 < 10
      ? `0${dateTime.getMonth() + 1}`
      : dateTime.getMonth() + 1;
  const d =
    dateTime.getDate() < 10 ? `0${dateTime.getDate()}` : dateTime.getDate();
  const t =
    dateTime.getHours() +
    ":" +
    (dateTime.getMinutes() < 10
      ? `0${dateTime.getMinutes()}`
      : dateTime.getMinutes());
  return `${t} ${d}.${m}.${dateTime.getFullYear()}`;
}

const { Option, OptGroup } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const AddNewEventModal = () => {
  const searchControl = useRef(null);
  const { DATE_FORMAT } = userModal;
  const dispatch = useDispatch();
  const [isOfflineEvent, setIsOfflineEvent] = useState(false);
  const [isEventWithDeadline, setisEventWithDeadline] = useState(true);
  const visible = useSelector(
    (state) => state.modalWindowReducer.AddNewEventModalVisability
  );
  const Show = (data) => {
    console.log(searchControl.getResult(data.index));
    console.log("REF:", searchControl, searchControl.current);
  };
  const onEventLocationChange = (e) => {
    if (e === "online") {
      setIsOfflineEvent(false);
    } else {
      setIsOfflineEvent(true);
    }
  };
  const onEventDeadlineChange = (e) => {
    setisEventWithDeadline(e.target.checked);
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const handleCancel = () => {
    dispatch(actionCreator.AddNewEventModalVisability(!visible));
  };
  const onSubmit = useCallback((values) => {
    console.log(values);
  }, []);
  const [form] = useForm();

  return (
    <Modal
      visible={visible}
      footer={
        null
      } /*{[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onSubmit}>
          Submit
        </Button>,
      ]}*/
    >
      <h2 className="wrapper-modal-edit__header">Add new event</h2>
      <Form form={form} onFinish={onFinish} onSubmit={onSubmit} name="basic">
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
            <FormItem name="timeZone">
              <Select defaultValue={"Timezone" + " "} style={{ width: 200 }}>
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
            <FormItem name="currentDate">
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
              defaultValue="Online/Offline"
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
                <Input placeholder="Town" style={{ marginBottom: "5px" }} />
                <Select
                  defaultValue="Type of street"
                  style={{ width: 200, marginBottom: "5px" }}
                >
                  <OptGroup label="Type">
                    <Option value="avenue">
                      {MENTOR_MODAL.streetType.avenue}
                    </Option>
                    <Option value="street">
                      {MENTOR_MODAL.streetType.street}
                    </Option>
                    <Option value="lane">{MENTOR_MODAL.streetType.lane}</Option>
                  </OptGroup>
                </Select>
                <Input placeholder="Street" style={{ marginBottom: "5px" }} />
                <Input placeholder="№ of house" />
              </Col>
              <Col>
                <YMaps query={{ apikey: map.KEY }}>
                  <div>
                    <Map
                      defaultState={{
                        center: [55.75, 37.57],
                        zoom: 9,
                      }}
                    >
                      <Placemark
                        geometry={[55.684758, 37.738521]}
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
                      <SearchControl instanceRef={searchControl} />
                    </Map>
                  </div>
                </YMaps>
              </Col>
            </Row>
          )}
        </Col>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default AddNewEventModal;
