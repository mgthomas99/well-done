const gulp = require("gulp");
const typescript = require("gulp-typescript");

gulp.task("build", function () {
    const ts_project = typescript.createProject("tsconfig.json");

    return gulp.src("src/**/*.ts")
            .pipe(ts_project())
            .pipe(gulp.dest("dist/"));
});

gulp.task("default", ["build"]);
