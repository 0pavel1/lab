call %~dp0venv\Scripts\activate.bat
cd /d %~dp02 lab
uvicorn cal:app --reload