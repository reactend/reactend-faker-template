import React from "react";
import {
  registerApp,
  App,
  Router,
  Get,
  Post,
  Res,
  Logger,
} from "@reactend/express";

const ExpressApp = () => (
  <App port={process.env.PORT || 3000}>
    <Logger mode="dev" disabled={isProd} />
    <Router path="/api">
      <Get path="/users">
        <Res.Faker
          length={10}
          locale="en"
          map={{
            user: {
              fullName: "name.findName",
              avatar: "image.imageUrl",
              registeredAt: "date.past",
            },
            orders: [
              {
                id: "random.uuid",
                name: "commerce.productName",
                color: "commerce.color",
              },
              {
                id: "random.uuid",
                name: "commerce.productName",
                color: "commerce.color",
              },
            ],
          }}
        />
      </Get>
      <Post path="/news">
        <Res.Faker
          map={{
            title: "lorem.sentence",
            body: "lorem.paragraphs",
            cover: "image.lorempixel",
            createdAt: "date.past",
          }}
        />
      </Post>
    </Router>
  </App>
);

registerApp(ExpressApp);
