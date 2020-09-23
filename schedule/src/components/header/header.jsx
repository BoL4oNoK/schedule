import React from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import SettingsModal from "./settings-modal/settings-modal";
import ColumnVisible from "./column-visible/column-visible";
import StudentMentorSwitch from "./student-mentor/student-mentor";
import ImpairedVersion from "./impaired-version/impaired-version";
import TimezoneSelect from "./timezone-select/timezone-select";
import ViewTypeSelect from "./view-type-select/view-type-select";
import HideRowsButton from "./hide-and-show-rows-button/HideRowsButton";
import { actionCreator } from "../../store/actions";
import ShowRowsButton from "./hide-and-show-rows-button/ShowRowsButton";
import "./header.css";

import {
  USERS,
  VIEWS_FOR_SCHEDULE,
  ADD_NEW_EVENT_BUTTON_NAME,
} from "../../constants/constants";

export default function Header() {
  const view = useSelector((state) => state.optionsReducer.viewStatus);
  const user = useSelector((state) => state.optionsReducer.user);
  const isImpairedVersion = useSelector(
    (state) => state.optionsReducer.impairedVersion
  );
  const dispatch = useDispatch();
  const AddNewEventModalVisible = useSelector(
    (state) => state.modalWindowReducer.AddNewEventModalVisibility
  );

  return (
    <div className={isImpairedVersion ? "impairedVersion" : ""}>
      <Row justify="space-between">
        <Col span={12}>
          <ImpairedVersion />
        </Col>
        <Col span={12} style={{ float: "right" }}>
          <SettingsModal />
          <StudentMentorSwitch />
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <ViewTypeSelect />
          <TimezoneSelect />
          <ShowRowsButton />
          <HideRowsButton />
        </Col>
        <Col span={8}>
          {view === VIEWS_FOR_SCHEDULE.table ? <ColumnVisible /> : null}
          {user === USERS.mentor ? (
            <Button
              style={{ float: "right", margin: "0 10px" }}
              type="primary"
              ghost
              onClick={() =>
                dispatch(
                  actionCreator.AddNewEventModalVisability(
                    !AddNewEventModalVisible
                  )
                )
              }
            >
              {" "}
              {ADD_NEW_EVENT_BUTTON_NAME}{" "}
            </Button>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}
