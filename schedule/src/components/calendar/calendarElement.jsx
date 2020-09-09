import React from 'react';
import 'antd/dist/antd.css';
import { Badge } from 'antd';

const arrGreenBadges = [
    'task',
    'js task',
    'html task',
    'codewars',
];

const arrYellowBadges = [
    'interview',
];

const arrRedBadges = [
    'deadline',
];

function getBadgeColor(type) {
    if (arrGreenBadges.includes(type)) {
        return 'green';
    }

    if (arrYellowBadges.includes(type)) {
        return 'yellow';
    }

    if (arrRedBadges.includes(type)) {
        return 'red';
    }

    return 'grey';
}

export default function calendarElement (event) {
    const badgeColor = getBadgeColor(event.type);
    const badgeText = event.name;
    const badgeTitle = `${event.type}: ${event.time} > ${event.name}`;
    return (
        <li key={event.id} title={badgeTitle}>
          <Badge color={badgeColor} text={badgeText} />
        </li>
    );
}
