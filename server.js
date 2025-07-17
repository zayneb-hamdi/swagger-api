const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

let books=
[
    {
        'id':1,
        'title':'la rose de versaille',
        'author':'unknown'
    }
]

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sample API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.get('/books',(req,res)=>
{
    res.json(books)
})
// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📚 Swagger docs at http://localhost:${PORT}/api-docs`);
});
