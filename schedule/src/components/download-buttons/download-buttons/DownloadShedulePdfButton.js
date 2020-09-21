import React from 'react'
import html2canvas from 'html2canvas';
import { Button } from 'antd';
import { DOWNLOAD_BUTTONS_NAME } from '../../../constants/constants';
import { jsPDF } from 'jspdf';
import { useSelector } from 'react-redux';

export default function DownloadShedulePdfButton() {
  const viewType = useSelector(state => state.optionsReducer.viewStatus);

  function onDownloadButtonClick() {
    const schduleViewElement = document.getElementById('schedule-view');

    const html_width = schduleViewElement.clientWidth;
    const html_height = schduleViewElement.clientHeight;
    const pdf_width = html_width + ( 15 * 2 );
    const pdf_height = ( pdf_width * 1.5 ) + ( 15 * 2 );
    
    html2canvas(schduleViewElement, { allowTaint: false }).then((canvas) => {
      canvas.getContext('2d');
      canvas.setAttribute('crossorigin', 'anonymous');
      const imgSchedule = canvas.toDataURL('image/png', 1);
      const pdf = new jsPDF('p', 'pt', [pdf_width, pdf_height]);
      pdf.text(10, 20, viewType.toUpperCase());
      pdf.addImage(imgSchedule, 'JPG', 15, 15, html_width, html_height);
      pdf.save(`${viewType}-schedule.pdf`);
    });
  }
  

  return (
    <Button
      onClick={onDownloadButtonClick}
      type="dashed"
    >
      { DOWNLOAD_BUTTONS_NAME.downloadPdfButtonName }
    </Button>
  );
}