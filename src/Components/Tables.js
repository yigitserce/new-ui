const Table = (props) => {
  const { mainEngine, engine1, engine2, engine3, engine4, lidar, velocity,theLidar } =
    props;
  return (
    <div className="tableSite">
     
      <div>
        <h4>ROKET VERİLERİ</h4>
        DISTANCE : {theLidar}
        <br />
        <br />
        VELOCITY : {velocity}
        <br />
        <br />
        MAIN ENGINE : {mainEngine ? "AÇIK" : "KAPALI"}
        <br />
        <br />
        1. ENGINE : {engine1 ? "AÇIK" : "KAPALI"}
        <br />
        <br />
        2. ENGINE : {engine2 ? "AÇIK" : "KAPALI"}
        <br />
        <br />
        3. ENGINE : {engine3 ? "AÇIK" : "KAPALI"}
        <br />
        <br />
        4. ENGINE : {engine4 ? "AÇIK" : "KAPALI"}
      </div>
      <div>
        <h4>ROKET VERİLERİ</h4>
        DISTANCE : {lidar}
        <br />
        <br />
        VELOCITY : 0
        <br />
        <br />
        MAIN ENGINE : KAPALI
        <br />
        <br />
        1. ENGINE : KAPALI
        <br />
        <br />
        2. ENGINE : KAPALI
        <br />
        <br />
        3. ENGINE : KAPALI
        <br />
        <br />
        4. ENGINE : KAPALI
      </div>
    </div>
  );
};
export default Table;
