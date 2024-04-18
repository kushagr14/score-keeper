let score=0, wicket=0;

        function addOne(){
            score += 1;
            rootElement.render(<App/>);
        }

        function addTwo(){
            score += 2;
            rootElement.render(<App/>);
        }

        function addThree(){
            score += 3;
            rootElement.render(<App/>);
        }

        function addFour(){
            score += 4;
            rootElement.render(<App/>);
        }

        function addFive(){
            score += 5;
            rootElement.render(<App/>);
        }

        function addSix(){
            score += 6;
            rootElement.render(<App/>);
        }

        function addWicket(){
            wicket += 1;
            rootElement.render(<App/>);
        }

        const App = () => (
            <>
                <h1>Score Keeper App</h1>
                <h2>Score: {score}/{wicket}</h2>
                <div>
                    <button id='1' onClick= {addOne}>1</button>
                    <button id='2' onClick={addTwo}>2</button>
                    <button id='3'onClick={addThree}>3</button>
                    <button id='4'onClick={addFour}>4</button>
                    <button id='5'onClick={addFive}>5</button>
                    <button id='6'onClick={addSix}>6</button>
                    <button id='wicket' onClick={addWicket}>Wicket</button>
                </div>
                {

                }
            </>
        )

        const rootElement = ReactDOM.createRoot(document.getElementById('root'));
        rootElement.render(<App/>);
