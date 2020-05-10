import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { ITooltipProps } from '../../interfaces/tooltip.interface';

const InfoTooltip: React.FC<ITooltipProps> = props => {
  const dataPlacement = props.dataPlacement ? props.dataPlacement : 'auto';
  const popover = <Popover id={'popover-basic'}>{props.message}</Popover>;
  return (
    <OverlayTrigger
      trigger='click'
      overlay={popover}
      placement={'auto'}
      rootClose
    >
      <span className='tool-info'>
        <i className='fas fa-question-circle' />
      </span>
    </OverlayTrigger>
  );
};

export default InfoTooltip;
