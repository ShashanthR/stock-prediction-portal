📈 Stock Prediction PortalA web application for exploring stock data. The React frontend provides account registration and login, a protected dashboard, and a stock ticker form designed to display price charts and model evaluation metrics. The Django REST API provides user registration and JWT authentication.Note on Current Status:
The frontend dashboard is prepared to request stock predictions, but the Django backend does not currently implement the /api/v1/predict/ endpoint. Prediction charts and metrics will be available once a prediction service is connected.✨ FeaturesAuthentication: Register an account and sign in using JWT access and refresh tokens.Secure Access: Visit a protected dashboard after signing in.Data Input: Enter a stock ticker in the dashboard UI.Visualization: View prediction charts and evaluation metrics when a prediction API is connected.🛠️ Technology StackFrontend: React, Vite, React Router, Axios, BootstrapBackend: Django, Django REST Framework (DRF), Simple JWT, SQLite📋 RequirementsNode.js and npmPython 3.8+ and pip🚀 Run LocallyRun the backend and frontend in separate terminals from the project root.1. Start the Django APIcd backend-drf
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install Django djangorestframework djangorestframework-simplejwt django-cors-headers python-decouple
Create backend-drf/.env with a local-only secret key and development setting:SECRET_KEY=replace-this-with-a-long-random-secret
DEBUG=True
Then initialize the database and run the server:python manage.py migrate
python manage.py runserver
The API is available at http://127.0.0.1:8000/. The backend's CORS settings currently allow the Vite development origin http://localhost:5173.2. Start the React FrontendIn another terminal:cd frontend-react
npm install
Create frontend-react/.env with:VITE_BACKEND_BASE_API=http://127.0.0.1:8000/api/v1
VITE_BACKEND_ROOT=http://127.0.0.1:8000
Start the development server:npm run dev
Open the local URL printed by Vite (by default, http://localhost:5173).📡 API RoutesThe backend exposes these routes under /api/v1/:MethodRouteDescriptionAuthenticationPOST/register/Create an accountNot requiredPOST/token/Obtain JWT access and refresh tokensNot requiredPOST/token/refresh/Refresh an access tokenNot requiredGET/protected-view/Example protected endpointJWT requiredThe frontend dashboard also calls POST /api/v1/predict/; implement and connect this endpoint to enable stock predictions.🧪 Development ChecksFrom frontend-react/:npm run lint
npm run build
From backend-drf/ with the virtual environment activated:python manage.py check
python manage.py test
🔒 Security NotesKeep .env files and production credentials out of Git. Ensure they are added to your .gitignore.Use a unique, securely generated SECRET_KEY and set DEBUG=False in production.Configure production hosts, CORS origins, HTTPS, and database settings before deployment.Disclaimer: Stock predictions, once integrated, are estimates and should not be treated as financial advice.
