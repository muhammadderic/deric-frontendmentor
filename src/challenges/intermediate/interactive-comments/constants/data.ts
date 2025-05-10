import type { Comment } from "@challenges/intermediate/interactive-comments/types"

import amyrobsonPng from '@assets/interactive-comments/images/avatars/image-amyrobson.png';
import maxblagunPng from '@assets/interactive-comments/images/avatars/image-maxblagun.png';
import ramsesmironPng from '@assets/interactive-comments/images/avatars/image-ramsesmiron.png';
import juliusomoPng from '@assets/interactive-comments/images/avatars/image-juliusomo.png';

export const comments: Comment[]= [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "votedBy": [],
      "user": {
        "image": amyrobsonPng,
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "votedBy": [],
      "user": {
        "image": maxblagunPng,
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "votedBy": [],
          "replyingTo": "maxblagun",
          "user": {
            "image": ramsesmironPng,
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "votedBy": [],
          "replyingTo": "maxblagun",
          "user": {
            "image": amyrobsonPng,
            "username": "amyrobson"
          }
        }
      ]
    }
  ]

export const data = {
  "currentUser": {
    "image": juliusomoPng,
    "username": "juliusomo"
  },
  comments: comments,
}