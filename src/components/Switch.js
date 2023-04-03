const Switch = ({ switchButton, setSwitch }) => {
  return (
    <div className="switch">
      <div className="a">
        <button
          value={!switchButton}
          onClick={() => setSwitch(true)}
          className={switchButton ? "on" : "off"}
        >
          ON
        </button>
      </div>
      <div className="b">
        <button
          value={!switchButton}
          onClick={() => setSwitch(false)}
          className={switchButton ? "off" : "on"}
        >
          OFF
        </button>
      </div>
    </div>
  );
};
export default Switch;
