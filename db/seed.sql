create table users { user_id serial primary key,
email varchar(100) not null,
password varchar(50) not null,
profile_pic text not null,
playlist_uri text,
}

