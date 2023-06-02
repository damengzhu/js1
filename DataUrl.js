function utf8_to_b64(str) {
            return window.btoa(unescape(encodeURIComponent(str)));
        }

        const btn = document.querySelector("#btn");
        btn.addEventListener("click", () => {
            const htmlContent = document.querySelector("html");
            console.log(htmlContent.innerHTML);
            const dataUrl = "<html>" + htmlContent.innerHTML + "</html>";
            const base64 = utf8_to_b64(dataUrl);

            const inputValue = `data:text/html;base64,${base64}`
            const input = document.createElement("input");
            input.setAttribute("readonly", "readonly");
            input.setAttribute("value", inputValue);
            document.body.appendChild(input);
            input.setSelectionRange(0, 9999);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
        });

        const style = document.createElement("style");
        style.innerHTML = `
            body {
                margin: 0;
                padding: 0;
            }

            #editor-area {
                width: 100%;
                height: calc(100vh - 50px);
                outline: 1px solid gray;
            }

            #btn {
                display: block;
                width: 100%;
                height: 40px;
            }
        `;
        document.head.appendChild(style);