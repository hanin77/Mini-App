const Footer = () => {
  return (
    <footer className="footer">
      <span className="d-block d-md-inline-block">
        <span className="d-sm-inline-block text-secodary">
          {"All Rights Reserved"} © {new Date().getFullYear()}{" "}
        </span>
      </span>
    </footer>
  )
}

export default Footer
