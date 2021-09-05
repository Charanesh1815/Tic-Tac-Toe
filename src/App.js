import React, { useState } from "react"
import Icon from "./Components/Icons"
//Import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import reactstrap
import { Button, Container, Card, CardBody, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

const tictactoeArray = new Array(9).fill("")
const App = ()=> {
    
    let [isCross, setIsCross] = useState("")
    let [winMessage, setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        tictactoeArray.fill("")
        setWinMessage("")
    }

    const findWinner = ()=>{

            // First row
            if(tictactoeArray[0]== tictactoeArray[1] && tictactoeArray[0]==tictactoeArray[2] && tictactoeArray[1]!=""){
                setWinMessage(tictactoeArray[0]+" has won the game!!")
            }
            // Middle row
            else if(tictactoeArray[3]==tictactoeArray[4] && tictactoeArray[3]==tictactoeArray[5] && tictactoeArray[3]!=""){
                setWinMessage(tictactoeArray[3]+ " has won the game!!")
            }
            // Last row
            else if(tictactoeArray[6]==tictactoeArray[7] && tictactoeArray[6]==tictactoeArray[8] && tictactoeArray[6]!=""){
                setWinMessage(tictactoeArray[6]+ " has won the game!!")
            }
            // First column
            else if(tictactoeArray[0]==tictactoeArray[3] && tictactoeArray[0]==tictactoeArray[6] && tictactoeArray[0]!=""){
                setWinMessage(tictactoeArray[0]+ " has won the game!!")
            }
            // Middle column
            else if(tictactoeArray[1]==tictactoeArray[4] && tictactoeArray[1]==tictactoeArray[7] && tictactoeArray[1]!=""){
                setWinMessage(tictactoeArray[1]+ " has won the game!!")
            }
            // Last column
            else if(tictactoeArray[2]==tictactoeArray[5] && tictactoeArray[2]==tictactoeArray[8] && tictactoeArray[2]!=""){
                setWinMessage(tictactoeArray[2]+ " has won the game!!")
            }
            // Left to right cross
            else if(tictactoeArray[0]==tictactoeArray[4] && tictactoeArray[0]==tictactoeArray[8] && tictactoeArray[0]!=""){
                setWinMessage(tictactoeArray[0]+ " has won the game!!")
            }
            // Right to Left cross
            else if(tictactoeArray[2]==tictactoeArray[4] && tictactoeArray[2]==tictactoeArray[6] && tictactoeArray[2]!=""){
                setWinMessage(tictactoeArray[2]+ " has won the game!!")
            }

            if(winMessage==""){
                if(tictactoeArray[0]!="" && tictactoeArray[1]!="" && tictactoeArray[2]!="" && tictactoeArray[3]!="" && tictactoeArray[4]!="" && tictactoeArray[5]!="" && tictactoeArray[6]!="" && tictactoeArray[7]!="" && tictactoeArray[8]!=""){
                    setWinMessage("It's a Draw")
                }
            }

            

    
            
        
    }


    const changeItem= (index)=>{
        if(winMessage) {
            return toast("Game has already got over", {type:"success"})
        }
        if(tictactoeArray[index] == ""){
            tictactoeArray[index]= isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }
        else{
            return toast("Open your eyes dude, where are you tapping", {type: "warning"} )
        }
        
        findWinner()
        
    }


    return(
        <Container className="p-5 mt-5 ">
            <ToastContainer position="bottom-center"></ToastContainer>
            <Row> 
                <Col md={6} className="offset-md-3">
                    
                    {
                        winMessage? (
                            <div className="text-center">
                                <h1>
                                    {winMessage}
                                </h1>
                                <Button onClick={playAgain} className="p-2 mt-3 mb-3 "> Start New</Button>
                            </div>
                        ) : (
                            <h1 className="text-center mb-5">
                                {isCross? "Cross's Turn": "Circle's Turn"}
                            </h1>
                        )
                    }

                    <div className="grid"> 
                        {tictactoeArray.map((value, index)=>(
                            <Card onClick={()=>changeItem(index)} className="card">
                                <CardBody className="box">
                                    <Icon choice={tictactoeArray[index]} />
                                </CardBody>    
                            </Card>
                        ))}
                    </div>

                </Col>
            </Row>
            <div className="text-center mt-5">
                <h1> Choose your Symbol</h1>
                <button className="m-3 p-2" onClick={()=>{setIsCross(true)}}> Cross </button>
                <button className="m-3 p-2" onClick={()=>{setIsCross(false)}}>Circle</button>
            </div>
        </Container>
    )
}

export default App