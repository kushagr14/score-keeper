let score=0, wicket=0;

        let ballWiseScr= [];
        let hit=0;

        function addScore(num){
            hit=num;
            rootElement.render(<App/>);
            console.log(hit);
        }

        function addWicket(){
            hit ='W';
            rootElement.render(<App/>);
            console.log(hit);
        }

        const ScoreButtons = () => (
            <>
                <div>
                    <button id='0' onClick= {() => addScore(0)}>0</button>
                    <button id='1' onClick= {() => addScore(1)}>1</button>
                    <button id='2' onClick={() => addScore(2)}>2</button>
                    <button id='3'onClick={() => addScore(3)}>3</button>
                    <button id='4'onClick={() => addScore(4)}>4</button>
                    <button id='5'onClick={() => addScore(5)}>5</button>
                    <button id='6'onClick={() => addScore(6)}>6</button>
                    <button id='wicket' onClick={addWicket}>Wicket</button>
                </div>
            </>
        )
        let inputRef= React.createRef();
        function handleSubmit(event){
            if(hit === 'W'){
                wicket++;
            } else{
                score += hit;
            }

           

            event.preventDefault();

            ballWiseScr.unshift(`${hit}, ${inputRef.current.value}`);
            hit=0;
            inputRef.current.value="";
            console.log(ballWiseScr);
            
            rootElement.render(<App/>);

        }

        const Form = () => (
            <>
                <form onSubmit= {handleSubmit}>
                    <input value={hit}/>
                    <input ref={inputRef} placeholder='Add comment'/>
                    <button>Submit</button>
                </form>
            </>
        )

        const Result = () => (
            <>
                <div>
                    {
                        ballWiseScr.map((s, index) => (
                            <>
                                {index%6 === 0 ? <br/> : null}
                                <span key={index} style={{ color: s === 'W' ? 'red' : 'black' }}>
                                    <>
                                        {s === 0 ? '.' : s}
                                    </>
                                </span>&nbsp;&nbsp;&nbsp;
                            </>
                        ))
                    }
                </div>
            </>
            
        )

        const App = () => (
            <>
                <h1>Score Keeper App: Kushagr</h1>
                <h2>Score: {score}/{wicket}</h2>
                <ScoreButtons/>
                <hr></hr>
                <Form/>
                <br></br>

                {ballWiseScr.map((res, index) => (
                    <>
                        <p key={index}>{res}</p>
                        
                    </>
                ))}
            </>
        )

        const rootElement = ReactDOM.createRoot(document.getElementById('root'));
        rootElement.render(<App/>);
