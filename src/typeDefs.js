const typeDefs = `#graphql

    type Author {
        id: ID!
        name: String!
        books: [Book]
    }

    type Book {
        id: ID!
        title: String!
        publishedYear: Int
        author: Author
    }

    type Query {
        authors: [Author]
        books: [Book]
    }

    type Mutation {
        addBook(title: String!, publishedYear: Int, authorId: ID! ): Book!
    }
`

export default typeDefs;

/*

query ExampleQuery {
  books {
    id,
    title,
    author{
        name
    }
  }
}
* =====================================

mutation AddBook($title: String!, $publishedYear: Int, $authorId: ID! ){
    addBook(title: $title, publishedYear: $publishedYear, authorId: $authorId ){
        title
    }
}


{
    "title":"New bokks12 changed",
    "publishedYear":2029,
    "authorId":"123"
}

*/
