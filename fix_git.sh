body {
    font-family: "Arial", sans-serif;
    background: linear-gradient(120deg, #007bff, #6610f2);
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 0;
    animation: fadeIn 1s ease-in-out;
}

/* Animation d'apparition */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

nav ul {
    list-style: none;
    padding: 0;
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 10px;
    display: inline-block;
}

nav ul li {
    display: inline;
    margin: 10px;
}

nav ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

nav ul li a:hover {
    color: #ffcc00;
}

.feature {
    background: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 15px;
    width: 200px;
    transition: transform 0.3s ease-in-out;
}

.feature:hover {
    transform: scale(1.05);
}

footer {
    margin-top: 30px;
    font-size: 14px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
}
