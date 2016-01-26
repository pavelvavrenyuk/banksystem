<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<html >
    <head>
        <meta charset="utf-8">
        <title>DIY One-way Data Binding</title>
        <link rel="stylesheet" type="text/css" href="/resources/css/style.css"/>
        <link href="/resources/libs/css/bootstrap.min.css" rel="stylesheet">
        <link href="/resources/libs/css/bootstrap.css" rel="stylesheet">

        <script src="/resources/libs/bower_components/angular/angular.min.js"></script>
        <script src="/resources/libs/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
        <script src="/resources/libs/bower_components/angular-smart-table/dist/smart-table.min.js"></script>
        <script src="/resources/js/app.js"></script>
        <script src="/resources/js/controllers.js"></script>

    </head>
    <body ng-app="bankSystem">

    <security:authorize access="!isAuthenticated()">
        <jsp:include page="login.jsp"/>
    </security:authorize>

    <security:authorize access="isAuthenticated()">
    <div id="mainContainer" class="main" ng-controller="globalCtrl">

            <div id="rowWithLogo" class="row">
                <div id="language" class="col-md-1">
                    <select id="languageSelect" name="select" ng-model="language" ng-click="changeLanguage()">
                        <option value="en" ng-bind="english"></option>
                        <option value="ru" ng-bind="russian"></option>
                    </select>
                </div>
                <div id="bankLogo" class="col-md-1 col-md-offset-4">
                    <img src="/resources/img/logo.png"><br><br>
                </div>
            </div>

            <div id="rowWithEmailAndLogout" class="row">
                <div id="userEmail" class="col-md-4">
                    <h3>
                        <span ng-bind="dataTransfer.user_email"></span>: <b><security:authentication property="principal.username" /></b>
                    </h3>

                </div>
                <div id="Logout" class="col-md-1 col-md-offset-7">
                    <a id="logoutLink" ng-href="${pageContext.request.contextPath}/logout">
                        <h4 ng-bind="dataTransfer.link_logout"></h4>
                    </a>
                </div>
            </div>

            <div id="mainBorder" class="row border-line"></div>

            <div class="row">
                <div id="options" class="col-md-2">
                    <div id="button1" class="form-group">
                        <button type="submit" class="btn btn-default optionButtonOptions" ui-sref="accounts">
                            <h4 ng-bind="dataTransfer.button_accounts"></h4>
                        </button>
                    </div>
                    <div id="button2" class="form-group">
                        <button type="submit" class="btn btn-default optionButtonOptions" ui-sref="operations">
                            <h4 ng-bind="dataTransfer.button_operations"></h4>
                        </button>
                    </div>
                    <div id="button3" class="form-group">
                        <button type="submit" class="btn btn-default optionButtonOptions" ui-sref="reports">
                            <h4 ng-bind="dataTransfer.button_reports"></h4>
                        </button>
                    </div>
                </div>
                <div id="contentView" class="col-md-10 global-border" ui-view></div>
            </div>
        </div>

    </security:authorize>
    </body>
</html>