import CrystallizeLayout, { showRight, showLeft } from '../module';

const left = () => <div>Left menu</div>;
const right = () => <div>Right menu</div>;

export default () => (
  <CrystallizeLayout left={left} right={right}>
    <style jsx>{`
      div {
        text-align: center;
        min-height: 150vh;
      }

      h1 {
        margin: 0 0 15px;
        padding-top: 10px;
      }

      button {
        margin: 0 10px;
      }
    `}</style>
    <div>
      <h1>React layout</h1>
      <button onClick={showLeft}>Show left</button>
      <button onClick={showRight}>Show right</button>
    </div>
  </CrystallizeLayout>
);
