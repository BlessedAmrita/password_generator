import { useState,useCallback, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(9);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const generatePassword = useCallback(()=>{
    let pass=""
    let str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if(numbersAllowed) str += "0123456789"
    if(charactersAllowed) str += "~!@#$%^&*()_+`-=<>{}|"
    for(let i=1;i<=length;i++){
      let rdnum=Math.floor(Math.random()*str.length)
      pass+=str[rdnum]
    }
    setPassword(pass)
  },
  [setPassword, length, numbersAllowed, charactersAllowed])

  // note
  // this is useful when there is no button for generating password nd we want new password for every state change
  // React.useEffect(()=>{
  //   generatePassword()
  // }, [length, numbersAllowed, charactersAllowed,generatePassword])

  const passwordRef = useRef(null)
  const copyPasswordToClipboard=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  },[password])
  
  return (
    <>
      {/* container div */}
      <div className="flex justify-center items-center space-y-4 h-screen bg-brown-dark text-gray-300 font-customFont1">
        <div className="bg-brown-light rounded-3xl font-extrabold p-10 flex flex-col items-center custom-shadow h-1/2 w-1/2 gap-9">
          <div>
            <h1 className="text-2xl ">Password Generator</h1>
          </div>
          <div className="flex mb-5">
            <input
              className="rounded-tl rounded-bl text-xl px-6 py-3 w-11/12 cursor-default text-brown-dark"
              type="text"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button className="bg-brown-dark rounded-tr rounded-br px-5 py-3  hover:text-gray-50" onClick={copyPasswordToClipboard}>
              Copy
            </button>
          </div>

          <div className="flex justify-between gap-3">
            <div className="flex gap-3">
              <label htmlFor="length" className="">
                Length: {length}
              </label>
              <input
                className=" cursor-pointer"
                type="range"
                id="length"
                value={length}
                min={5}
                max={100}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
            </div>
            <div className="lg:flex gap-3">
              <label htmlFor="numbers" className=" cursor-pointer">
                Numbers
              </label>
              <input
                className=" cursor-pointer"
                type="checkbox"
                id="numbers"
                checked={numbersAllowed}
                onChange={() => {
                  setNumbersAllowed((prev) => !prev);
                }}
              />
            </div>
            <div className="lg:flex gap-3">
              <label htmlFor="characters" className=" cursor-pointer">
                Characters
              </label>
              <input
                className=" cursor-pointer"
                type="checkbox"
                id="characters"
                checked={charactersAllowed}
                onChange={() => {
                  setCharactersAllowed((prev) => !prev);
                }}
              />
            </div>
          </div>
          <div>
            <button className="bg-brown-dark rounded px-5 py-3  hover:text-gray-50" onClick={generatePassword} >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
