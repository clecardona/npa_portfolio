import "./_chart.scss";
const CircleChart = ({
  selection,
  animate,
}: {
  selection: string;
  animate: boolean;
}) => {
  return (
    <div className="chart">
      <figure
        className={
          animate ? `chart-${selection} animate` : `chart-${selection} `
        }
      >
        <svg role="img" xmlns="http://www.w3.org/2000/svg">
          <circle className="circle-background" />
          <circle className="circle-foreground" />
        </svg>
        <figcaption>75% of all males like donuts.</figcaption>
      </figure>
      <h3>{selection}</h3>
    </div>
  );
};
export default CircleChart;
