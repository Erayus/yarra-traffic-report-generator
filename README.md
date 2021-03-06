# Yarra Traffic Reporter

## Demo
http://ytr.erayus.com.s3-website-ap-southeast-2.amazonaws.com/

## Technology stack
- **React:** This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- **Redux and React-Redux:** Allow fetching full set of data ONCE and using them across the components 
- **PrimeReact Chart**: Chart components installed from Bit (https://bit.dev/primefaces/primereact/chart?example=5d42e64160fbc6001439e6d0). Learn how to install components from Bit here(https://docs.bit.dev/docs/installing-components.html)
- **MDBoostrap** :  https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design
- **Momentjs**
- **React Router Dom**
- **Axios**
- **AWS S3**

## Improvements:
- ~~Generate Report for the "85th Percentile Speed"~~
- Refactor Navigation Item to its own component (more reusable)

## Deployment
- I use my developed CLI (Webotron, refer to package.json) to automate the deployment process to a AWS S3 bucket which is setup to be a static website


## Development
1. Clone this repo
2. Run npm install
3. Run npm start
