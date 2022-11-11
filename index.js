const Box = props => {
    const { className, text } = props
    return (
        <div className={className}>
            <p className="para">{text}</p>
        </div>

    )
}

const element = (
    <div className="container">
        <h1 className="heading">Boxes</h1>
        <div className="card">
          <Box className="small-card" text="Small"/>
          <Box className="medium-card" text="Medium"/>
          <Box className="large-card" text="Large"/>


        </div>
    </div>

)

ReactDOM.render(element, document.getElementById("root"));
