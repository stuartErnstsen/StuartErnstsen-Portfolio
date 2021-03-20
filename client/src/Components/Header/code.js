const code = `header {
    display: fixed;
    left: 0px;
    top: 0px;
    height: 100vh;
    width: 100vw;
    .header-inner-container {
        display: flex;
        height: 100%;
        .header-child {
            width: 50%;
            display: flex;
            flex-direction: column;
            .header-title-container {
                height: 80px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }
            .header-info {
                height: calc(100vh - 80px);
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
        #header-left {
            max-height: 100vh;
            background-color: #333;
            .title-start {
                position: relative;
                margin-right: 5px;
                color: #fc6a46; 
                font-weight: 300;
                font-size: 1.8rem;
                font-family: 'Quicksand', sans-serif;
            }
        }
        #header-right {     
            color: #333;
            .header-title-container {
                justify-content: flex-start;
            }
            .title-end {
                position: relative;
                margin-left: 5px;
                font-family: 'Rock Salt', cursive;                
            }
            .header-info {
                padding-left: 20px;
                font-size: .9rem;
                font-weight: 700;
            }
        }
    } 
}
`

export default code;