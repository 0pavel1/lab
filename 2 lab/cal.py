from fastapi import FastAPI,Body
from fastapi.responses import FileResponse


app = FastAPI()


@app.get("/")
def read_items():
    return FileResponse("2.html")


@app.post("/otv")
def otv(data = Body()):
    num1, num2 = int(data["num1"]), int(data["num2"])
    sign = str(data["sign"])
    if sign == "+":
        return {"st": f"{num1} + {num2} = {num1 + num2}"}
    elif sign == "-":
        return {"st": f"{num1} - {num2} = {num1 - num2}"}
    elif sign == "/":
        return {"st": f"{num1} / {num2} = {num1 / num2}"}
    elif sign == "*":
        return {"st": f"{num1} * {num2} = {num1 * num2}"}
    else:
        return {"st": "NO"}