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
    <Logger mode="dev" />
    <Router path="/">
      <Get path="/users">
        <Res.Faker
          length={5}
          locale="en"
          map={{
            userId: "random.uuid",
            isAdmin: false,
            profile: {
              fullName: "name.findName",
              avatar: "image.people",
              registeredAt: "date.past",
            },
            orders: Array.from({ length: 3 }, () => ({
              id: "random.uuid",
              name: "commerce.productName",
              color: "commerce.color",
            })),
          }}
        />
      </Get>
      <Post path="/post">
        <Res.Faker
          map={{
            title: "lorem.sentence",
            body: "lorem.paragraphs",
            image: "image.city",
            createdAt: "date.past",
          }}
        />
      </Post>
    </Router>
  </App>
);

registerApp(ExpressApp);
