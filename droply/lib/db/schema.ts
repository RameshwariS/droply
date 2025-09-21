import {pgTable,text,uuid,integer,boolean, timestamp} from "drizzle-orm/pg-core"
// uuid -> Universally Unique Identifier ->  can never be same

import {relations} from "drizzle-orm"
import { timeStamp } from "console"


export const files = pgTable("files",{
  id : uuid("id").defaultRandom().primaryKey(), // random id

  //basic file or folder info
  name : text("name").notNull(), //Defines a text column named name with a NOT NULL constraint.
  path : text("path").notNull(),  // doc/prj/res
  size : text("size").notNull(),
  type : text("type").notNull(), // folder or file

  // storage info
  fileUrl : text("file_url").notNull(), //url to access file
  thumbnailUrl : text("thumbnai_url").notNull(),
  

  //ownership
  userId : text("user_Id").notNull(),
  parentId : text("parent_Id"), // can be null for root

  //file or folder flags
  isFolder : boolean("is_folder").default(false).notNull(),
  isStarred : boolean("is_starred").default(false).notNull(),
  isTrash : boolean("is_trash").default(false).notNull(),

  //time stamps
  createdAt : timestamp("created_at").defaultNow().notNull(),
  updatedAt : timestamp("updated_at").defaultNow().notNull(),
  
})
