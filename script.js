let score=0, wicket=0;

        // function addOne(){
        //     score += 1;
        //     rootElement.render(<App/>);
        // }

        // function addTwo(){
        //     score += 2;
        //     rootElement.render(<App/>);
        // }

        // function addThree(){
        //     score += 3;
        //     rootElement.render(<App/>);
        // }

        // function addFour(){
        //     score += 4;
        //     rootElement.render(<App/>);
        // }

        // function addFive(){
        //     score += 5;
        //     rootElement.render(<App/>);
        // }

        // function addSix(){
        //     score += 6;
        //     rootElement.render(<App/>);
        // }

        function addScore(num){
            score += num;
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
                    <button id='1' onClick= {() => addScore(1)}>1</button>
                    <button id='2' onClick={() => addScore(2)}>2</button>
                    <button id='3'onClick={() => addScore(3)}>3</button>
                    <button id='4'onClick={() => addScore(4)}>4</button>
                    <button id='5'onClick={() => addScore(5)}>5</button>
                    <button id='6'onClick={() => addScore(6)}>6</button>
                    <button id='wicket' onClick={addWicket}>Wicket</button>
                </div>
                {

                }
            </>
        )

        const rootElement = ReactDOM.createRoot(document.getElementById('root'));
        rootElement.render(<App/>);
