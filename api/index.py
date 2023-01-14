# -*- coding: utf-8 -*-
# vim: ts=4 sw=4 tw=100 et ai si
#
# Copyright (C) 2022 Adam Hawley
# SPDX-License-Identifier: GPL-3.0-only
#
# Author: Adam Hawley

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Union

origins = [
    "http://localhost",
    "http://localhost:5173",
    "*"
]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/format")
async def read_item(value: Union[str,float], format: str):
    try:
        formatted_value = f"{value:{format}}"
    except ValueError as err:
        return {"formatted": "", "error": str(err)}

    return {"formatted": formatted_value, "error": ""}
