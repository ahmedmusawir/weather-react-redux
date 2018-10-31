import React from 'react';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = data => _.round(_.sum(data) / data.length);

const Chart = (props) => {
  const { data, color, units } = props;
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="float-left">
        {average(data)}
        {' '}
        {units}
      </div>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
};

export default Chart;
