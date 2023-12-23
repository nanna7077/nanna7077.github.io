function reset() {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("subject").value = '';
    document.getElementById("message").value = '';
}

function submit() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();
    var ip = null;
    var country = null;

    if (name.length > 256) name = `${name.slice(0, 245)} [More]`;
    if (email.length > 256) email = `${email.slice(0, 245)} [More]`;
    if (subject.length > 256) subject = `${subject.slice(0, 245)} [More]`;
    if (message.length > 2000) message = `${message.slice(0, 1980)} [More]`;

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        alert('Please enter a valid email address');
        return;
    }

    var newx = new XMLHttpRequest();
    newx.open("GET", "https://api.country.is/");
    newx.send();

    newx.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            ip = JSON.parse(this.responseText).ip;
            country = JSON.parse(this.responseText).country;
        } else {
            ip = "Unavailable";
            country = "Unavailable";
        }

        fetch("https://discord.com/api/webhooks/1188136978122813561/4mcppoINnVcRw2axYAjskbTic4m4Fk7gLyYWxWRwU8iS7PEpBf_kjSAm8rRQ1zq6VR-S", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "content": `**Message**\n\n${message}`,
                    "embeds": [
                        {
                        "title": `${name} has contacted!`,
                        "fields": [
                            {
                            "name": name,
                            "value": "Name",
                            "inline": true
                            },
                            {
                            "name": email,
                            "value": "Email",
                            "inline": true
                            },
                            {
                            "name": subject,
                            "value": "Subject"
                            },
                            {
                            "name": Date().toString(),
                            "value": "Sent On"
                            },
                            {
                            "name": ip,
                            "value": "IP Address",
                            "inline": true
                            },
                            {
                            "name": country,
                            "value": "Country",
                            "inline": true
                            },
                            {
                            "name": window.navigator.userAgent,
                            "value": "User Agent"
                            }
                        ]
                            }
                        ],
                        "attachments": []      
                })
            })
            .then(data => {
                if (data.status === 204) {
                    alert('Thank you for your message!');
                    reset();
                } else {
                    alert('Something went wrong. Please try again later.');
                }
            })
        }

}