var app = angular.module("EmployeeModule", []);
var EmployeeController = function ($scope, $http) {
    var url = "http://localhost:64596/api/employee";
    var onSuccess = function (response) {
        $scope.employeedata = response.data;
        $scope.SelectedEmpId = null;
        $scope.temp = null;
    }
    var onError = function (reason) {
        $scope.errormessage = "Could not load data";
    }
    $scope.SelectedEmpId = null;
    $scope.checkedstatus = false;
    //  $scope.settdVisible = false;
    //  $scope.chkvisibilty = null;
    $scope.selection = [];

    $scope.temp = null;
    $scope.ShowButton = function (OldVal) {
        //  alert("fgdf");
        if ($scope.temp == OldVal) { //alert(v)
            return true;
        }
        else return false;
    };



    // toggle selection for a given employee by name
    $scope.ChkClick = function ChkClick(id, chkvisibilty) {
        $scope.itemshow = false;
        // set index value for radio button
        $scope.temp = chkvisibilty;
    };
    //sorting
    $scope.sortType = ''; // set the default sort type
    $scope.sortReverse = true;  // set the default sort order

    $scope.GetDataFromDB = function () {
        $http.get(url).then(onSuccess, onError);
        //or use
        /*
        $http({
            method: 'GET',
            url: url           
        });
        */

    }

    var insert = false;
    $scope.itemshow = false;
    $scope.showdiv = function () {
        $scope.GetDataFromDB();
        $scope.itemshow = true;
        insert = true;
        $scope.SelectedEmpId = null;
        $scope.empName = '';
        $scope.empCity = '';
        $scope.empAddress = '';
        $scope.empPincode = '';
        $scope.empDOB = '';
    };

    $scope.CancelNew = function () {
        $scope.itemshow = false;
        insert = false;
    };

    $scope.SaveData = function () {

        if (insert && $scope.SelectedEmpId == null) {

            var mydata = $.param({ "Name": $scope.empName, "City": $scope.empCity, "Address": $scope.empAddress, "PinCode": $scope.empPincode, "DOB": $scope.empDOB });
            var promise = $http({
                method: 'POST',
                url: url,
                data: mydata,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            promise.then(
      function (answer) {
          //    $scope.itemshow = false;
          alert("Successfully added new record");
          $scope.GetDataFromDB();
      },
      function (error) {
          alert("Error");
      },
      function (progress) {
          alert("In progress");
      });


        }
        else {
            var mydata = $.param({ "Id": $scope.SelectedEmpId, "Name": $scope.empName, "City": $scope.empCity, "Address": $scope.empAddress, "PinCode": $scope.empPincode, "DOB": $scope.empDOB });
            $http({
                method: 'PUT',
                url: url + "/" + $scope.SelectedEmpId,
                data: mydata,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function (result) {
                alert("Successfully updated record");
                $scope.GetDataFromDB();
            });


        }

        $scope.itemshow = false;
    }


    $scope.UpdateEmp = function (EmpID) {
        $scope.itemshow = true;
        insert = false;
        $scope.SelectedEmpId = EmpID;

        angular.forEach($scope.employeedata, function (key, value) {
            if (EmpID != null && key.Id == EmpID) {
                $scope.empName = key.Name;
                $scope.empCity = key.City;
                $scope.empAddress = key.Address;
                $scope.empPincode = key.PinCode;
                var d = new Date(key.DOB);
                $scope.empDOB = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
            }
        });
    }

    $scope.DeleteEmp = function (EmpID) {
        $scope.SelectedEmpId = EmpID;
        angular.forEach($scope.employeedata, function (key, value) {
            if ($scope.SelectedEmpId != null && key.Id == $scope.SelectedEmpId) {
                $http({
                    method: 'DELETE',
                    url: url + "/" + $scope.SelectedEmpId,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function (result) {
                    alert("Successfully deleted record");
                    $scope.GetDataFromDB();
                });
            }

        });

    }

}


app.controller("EmployeeController", ["$scope", "$http", EmployeeController]);
