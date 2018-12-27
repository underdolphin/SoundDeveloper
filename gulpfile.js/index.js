// Copyright 2018 underdolphin(masato sueda)
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict'
const gulp = require("gulp");
const terser = require("gulp-terser")
const parcel = require("parcel-bundler");
const path = require("path");
const browsersync = require("browser-sync").create();
const del = require("del");
const ts = require("gulp-typescript");

const parcelClientEntry = "./src/client/index.html";

const parcelClientOption = {
    outDir: './dist/client',
    outFile: 'index.html',
    watch: true,
    cache: true,
    cacheDir: '.cache',
    minify: true,
    logLevel: 3,
    sourceMaps: true
}

const tsProject = ts.createProject('./tsconfig.json');

const browserSync = (done) => {
    browsersync.init({
        proxy: "localhost:3000",
        open: false,
        files: [
            "dist/client/**.*"
        ]
    })
    done();
}

const clean = () => {
    return del(["./dist/"]);
}

const parcelExec = async () => {
    const bundler = new parcel(parcelClientEntry, parcelClientOption);
    return await bundler.bundle();
}

const serverCompile = () => {
    return gulp.src("./src/server/**/*.ts", {
            base: "./src/server"
        })
        .pipe(tsProject())
        .pipe(terser({
            ecma: 8,
            mangle: false,
            keep_fnames: true
        }))
        .pipe(gulp.dest('./dist'))
}

const serverWatch = () => {
    gulp.watch("src/server/**/*.ts", serverCompile);
}

gulp.task("clean", gulp.parallel(clean));

gulp.task("watch",
    gulp.series(parcelExec,
        gulp.parallel(browserSync, serverWatch)
    )
);