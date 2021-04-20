import React, { useCallback, useMemo, useState } from "react";
import ButtonCtn from "./buttonContain";
import "../Style/individualStyle.css";

export default function Calculator() {
  const [expression, setExpression] = useState([]);
  const [result, setResult] = useState(0);

  //local use
  const handleRenderExp = useMemo(() => {
    const exp = [...expression];

    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === "*") {
        exp[i] = "x";
      }
    }
    return exp.join("");
  }, [expression]);

  //pass down as props
  const handleAddExpression = useCallback(
    (value) => {
      let exp = [...expression];
      const expLength = exp.length;
      let prevChar = "";
      //if already have result
      if (exp.some((item) => item === "=")) {
        if (typeof value === "number") {
          exp = [value];
          setExpression(exp);
        } else if (value === ".") {
          exp = [0, value];
          setExpression(exp);
        } else {
          exp = [result, value];
          setExpression(exp);
        }
      }

      //on first char
      else if (expLength === 0) {
        if (typeof value === "number" || value === "+" || value === "-") {
          exp.push(value);
          setExpression(exp);
        }
      }
      //on second char
      else if (expLength === 1) {
        prevChar = exp[expLength - 1];
        if (typeof prevChar === "number") {
          exp.push(value);
          setExpression(exp);
        } else {
          if (typeof value === "number") {
            exp.push(value);
            setExpression(exp);
          } else {
            if (value !== prevChar) {
              exp[exp.length - 1] = value;
              setExpression(exp);
            }
          }
        }
      }
      // on the third char
      else {
        prevChar = exp[expLength - 1];
        // if prev char is a number
        if (typeof prevChar === "number") {
          exp.push(value);
          setExpression(exp);
        }
        // if pre char not a number
        else {
          // if value is a number
          if (typeof value === "number") {
            exp.push(value);
            setExpression(exp);
          }
          // if value not a number and prev char diff from  "."
          if (prevChar !== ".") {
            switch (prevChar) {
              case "+":
                if (value !== "+") {
                  exp[exp.length - 1] = value;
                  setExpression(exp);
                }
                break;
              case "-":
                if (value !== "-") {
                  exp[exp.length - 1] = value;
                  setExpression(exp);
                }
                break;
              case "*":
                if (value !== "+") {
                  exp[exp.length - 1] = value;
                  setExpression(exp);
                }
                break;
              case "/":
                if (value !== "+") {
                  exp[exp.length - 1] = value;
                  setExpression(exp);
                }
                break;
              default:
            }
          }
        }
      }
    },
    [expression, result]
  );
  const handleRemoveCalc = useCallback(() => {
    setExpression([]);
    setResult(0);
  }, []);
  const handleCalcResult = useCallback(() => {
    const exp = [...expression];
    const prevChar = exp[exp.length - 1];
    if (exp.some((item) => item === "=")) {
      return;
    }
    if (prevChar) {
      if (typeof prevChar === "number") {
        const strExp = exp.join("");
        const res = eval(strExp);
        setResult(res);
        exp.push("=", res);
        setExpression(exp);
      } else {
        exp.pop();
        const strExp = exp.join("");
        const res = eval(strExp);
        setResult(res);
        exp.push("=", res);
        setExpression(exp);
      }
    }
  }, [expression]);

  return (
    <div id="calculator" className="container m-auto">
      <h1 className="text-center mb-12 text-5xl font-bold italic">
        <span>Calculator</span>
      </h1>
      <div
        id="calculator-contain"
        className="md:w-8/12 lg:w-7/12 xl:w-5/12 m-auto p-6 rounded-3xl"
      >
        <section id="result" className="mt-6 mb-5 mx-1 px-2 rounded-3xl">
          <div className="expression">
            <h2
              style={{
                minHeight: "64px",
              }}
              className="flex justify-end items-center text-right p-2 break-all text-4xl"
            >
              {handleRenderExp}
            </h2>
          </div>
          <div className="result-contain">
            <h2
              style={{ minHeight: "40px" }}
              className="flex justify-end items-center p-2 break-all text-4xl"
            >
              <span>{result}</span>
            </h2>
          </div>
        </section>
        <ButtonCtn
          handleAddEpression={handleAddExpression}
          handleRemoveCalc={handleRemoveCalc}
          handleCalcResult={handleCalcResult}
        />
      </div>
    </div>
  );
}
