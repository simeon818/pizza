export function Footer() {
  const date = new Date().toDateString();
  const hour = new Date().getHours();
  const openHours = 9;
  const closeHours = 12;
  const isOpen = hour >= openHours;
  const isClosed = hour <= openHours;

  return (
    <>
      <div
        style={{
          backgroundColor: "darkred",
          color: "white",
          width: "90%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30%",
        }}
      >
        {isOpen
          ? `we re currently open`
          : `we re closed for now until ${openHours}`}

        <p
          style={{
            fontWeight: "bold",
          }}
        >
          {date}
        </p>
      </div>
    </>
  );
}
