function countDown(count) {
  for (let i = count; i >= 0; i--) {
    setTimeout(function (i) {
      return (
        function () {
          console.log(i);
        },
        (count - 1) * 1000
      );
    });
  }
}

countDown(6);
