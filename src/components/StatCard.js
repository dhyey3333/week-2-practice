function StatCard(props) {

  return (

    <div
      style={{
        background:
          "rgba(255,255,255,0.12)",

        backdropFilter: "blur(10px)",

        borderRadius: "20px",

        padding: "25px",

        textAlign: "center",

        boxShadow:
          "0 8px 25px rgba(0,0,0,.3)"
      }}
    >

      <h1>{props.number}</h1>

      <p>{props.title}</p>

    </div>

  );

}

export default StatCard;