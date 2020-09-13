import React from 'react';
import 'antd/dist/antd.css';
import { Badge } from 'antd';
import { selectColor } from '../../utils/selectColor';

export default function calendarElement (event) {
    const badgeColor = selectColor(event.type);
    const badgeText = `${event.currentTime} ${event.name}`;
    const badgeTitle = `${event.type.toUpperCase()}: ${event.name}`;
    return (
        <li key={event.id} className="events__item" title={badgeTitle}>
          <Badge color={badgeColor} text={badgeText} />
        </li>
    );
}
