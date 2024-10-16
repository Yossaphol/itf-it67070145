let mydata = []
        const username = document.getElementById("name");
        const profile = document.getElementById("profile");
        const newdiv = document.getElementsByClassName("st")[0];
        let contactCount = 0;


        function setName() {
            username.textContent = document.getElementById("user").value + " Phone Book";
        }
        function setImg() {
            profile.style.backgroundImage = "url(" + document.getElementById("img").value + ")";
        }
        function addContact() {
            const name = document.getElementById("phonename").value;
            const phone = document.getElementById("tel").value;

            if (name && phone) {
                contactCount++;
                mydata.push({ "number": contactCount, "Name": name, "Tel": phone });
                const table = document.getElementById("contactList");
                const newRow = `<tr><td>${contactCount}</td><td>${name}</td><td>${phone}</td></tr>`;
                table.innerHTML += newRow;
                document.getElementById("phonename").value = '';
                document.getElementById("tel").value = '';
            } else {
                alert("Please enter both name and phone number.");
            }
        }
        function saveCSV() {
            let csvContent = "No.,Name,Phone Number\n";
            const rows = document.querySelectorAll("table tr");
            rows.forEach(row => {
                const cols = row.querySelectorAll("td, th");
                const rowData = [];
                cols.forEach(col => rowData.push(col.textContent));
                csvContent += rowData.join(",") + "\n";
            });
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "contacts.csv");
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }