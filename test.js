fetch(
  "https://discord.com/api/webhooks/1121127603496034415/f-C87wJCJRtMFaxYrUKdh_06-mQXRkcInCgLL1ztVZsKjzNWyfenFkUWjVefXB82I6wA",
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "User-Agent": "request",
    },
    body: JSON.stringify({
      username: "Steamship Release Bot",
      avatar_url:
        "https://www.steamship.com/images/brand/steamship-logo-light-symbol.png",
      embeds: [
        {
          title: "New python-client release 0.0.2",
          description: "New Release of the python-client",
          url: "https://github.com/steamship-core/python-client/releases",
          color: "5814783",
          fields: [
            { name: "ChangeLog", value: "* **Test**\\r\\n* Another Test" },
          ],
          author: {
            name: "",
            url: "",
            icon_url: "",
          },
          footer: {
            text: "",
            icon_url: "",
          },
          thumbnail: {
            url: "https://raw.githubusercontent.com/maxwfreu/test-release-bot/icon.png",
          },
        },
      ],
    }),
  }
);
