import Header from "components/Headers/Header";
import React from "react";
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userToBeUpdated } from "redux/Actions";
import { deleteUser } from "redux/Actions";
import { addUsers } from "redux/Actions";

const MyUserTable = () => {
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (user) => {
    dispatch(userToBeUpdated(user)); //dispatching with action
    navigate("/admin/myuserprofile"); //after dispatching navigate to userfrom
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <div className="heading">
                  <h3 className="text-white mb-0">Card tables</h3>
                </div>
                <div className="button float-right mt--4">
                  <Button
                    responsive
                    onClick={() => navigate("/admin/myuserprofile")}
                    color="primary"
                    type="submit"
                  >
                    +Add User
                  </Button>
                </div>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.username}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>

                      <td>
                        <button
                          onClick={() => handleEdit(user)}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="btn btn-sm btn-danger ms-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MyUserTable;

// <th scope="row">
// <Media className="align-items-center">
//     <a
//         className="avatar rounded-circle mr-3"
//         href="#pablo"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             src={require("../../assets/img/theme/bootstrap.jpg")}
//         />
//     </a>
//     <Media>
//         <span className="mb-0 text-sm">
//             Argon Design System
//         </span>
//     </Media>
// </Media>
// </th>
// <td>$2,500 USD</td>
// <td>
// <Badge color="" className="badge-dot mr-4">
//     <i className="bg-warning" />
//     pending
// </Badge>
// </td>
// <td>
// <div className="avatar-group">
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip731399078"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-1-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip731399078"
//     >
//         Ryan Tompson
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip491083084"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-2-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip491083084"
//     >
//         Romina Hadid
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip528540780"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-3-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip528540780"
//     >
//         Alexander Smith
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip237898869"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-4-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip237898869"
//     >
//         Jessica Doe
//     </UncontrolledTooltip>
// </div>
// </td>
// <td>
// <div className="d-flex align-items-center">
//     <span className="mr-2">60%</span>
//     <div>
//         <Progress
//             max="100"
//             value="60"
//             barClassName="bg-warning"
//         />
//     </div>
// </div>
// </td>
// <td className="text-right">
// <UncontrolledDropdown>
//     <DropdownToggle
//         className="btn-icon-only text-light"
//         href="#pablo"
//         role="button"
//         size="sm"
//         color=""
//         onClick={(e) => e.preventDefault()}
//     >
//         <i className="fas fa-ellipsis-v" />
//     </DropdownToggle>
//     <DropdownMenu className="dropdown-menu-arrow" right>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Action
//         </DropdownItem>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Another action
//         </DropdownItem>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Something else here
//         </DropdownItem>
//     </DropdownMenu>
// </UncontrolledDropdown>
// </td>
// </tr>
// <tr>
// <th scope="row">
// <Media className="align-items-center">
//     <a
//         className="avatar rounded-circle mr-3"
//         href="#pablo"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             src={require("../../assets/img/theme/angular.jpg")}
//         />
//     </a>
//     <Media>
//         <span className="mb-0 text-sm">
//             Angular Now UI Kit PRO
//         </span>
//     </Media>
// </Media>
// </th>
// <td>$1,800 USD</td>
// <td>
// <Badge color="" className="badge-dot">
//     <i className="bg-success" />
//     completed
// </Badge>
// </td>
// <td>
// <div className="avatar-group">
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip188614932"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-1-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip188614932"
//     >
//         Ryan Tompson
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip66535734"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-2-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip delay={0} target="tooltip66535734">
//         Romina Hadid
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip427561578"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-3-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip427561578"
//     >
//         Alexander Smith
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip904098289"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-4-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip904098289"
//     >
//         Jessica Doe
//     </UncontrolledTooltip>
// </div>
// </td>
// <td>
// <div className="d-flex align-items-center">
//     <span className="mr-2">100%</span>
//     <div>
//         <Progress
//             max="100"
//             value="100"
//             barClassName="bg-success"
//         />
//     </div>
// </div>
// </td>
// <td className="text-right">
// <UncontrolledDropdown>
//     <DropdownToggle
//         className="btn-icon-only text-light"
//         href="#pablo"
//         role="button"
//         size="sm"
//         color=""
//         onClick={(e) => e.preventDefault()}
//     >
//         <i className="fas fa-ellipsis-v" />
//     </DropdownToggle>
//     <DropdownMenu className="dropdown-menu-arrow" right>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Action
//         </DropdownItem>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Another action
//         </DropdownItem>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Something else here
//         </DropdownItem>
//     </DropdownMenu>
// </UncontrolledDropdown>
// </td>
// </tr>
// <tr>
// <th scope="row">
// <Media className="align-items-center">
//     <a
//         className="avatar rounded-circle mr-3"
//         href="#pablo"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             src={require("../../assets/img/theme/sketch.jpg")}
//         />
//     </a>
//     <Media>
//         <span className="mb-0 text-sm">Black Dashboard</span>
//     </Media>
// </Media>
// </th>
// <td>$3,150 USD</td>
// <td>
// <Badge color="" className="badge-dot mr-4">
//     <i className="bg-danger" />
//     delayed
// </Badge>
// </td>
// <td>
// <div className="avatar-group">
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip707904950"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-1-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip707904950"
//     >
//         Ryan Tompson
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip353988222"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-2-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip353988222"
//     >
//         Romina Hadid
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip467171202"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-3-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip467171202"
//     >
//         Alexander Smith
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip362118155"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-4-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip362118155"
//     >
//         Jessica Doe
//     </UncontrolledTooltip>
// </div>
// </td>
// <td>
// <div className="d-flex align-items-center">
//     <span className="mr-2">72%</span>
//     <div>
//         <Progress
//             max="100"
//             value="72"
//             barClassName="bg-danger"
//         />
//     </div>
// </div>
// </td>
// <td className="text-right">
// <UncontrolledDropdown>
//     <DropdownToggle
//         className="btn-icon-only text-light"
//         href="#pablo"
//         role="button"
//         size="sm"
//         color=""
//         onClick={(e) => e.preventDefault()}
//     >
//         <i className="fas fa-ellipsis-v" />
//     </DropdownToggle>
//     <DropdownMenu className="dropdown-menu-arrow" right>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Action
//         </DropdownItem>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Another action
//         </DropdownItem>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Something else here
//         </DropdownItem>
//     </DropdownMenu>
// </UncontrolledDropdown>
// </td>
// </tr>
// <tr>
// <th scope="row">
// <Media className="align-items-center">
//     <a
//         className="avatar rounded-circle mr-3"
//         href="#pablo"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             src={require("../../assets/img/theme/react.jpg")}
//         />
//     </a>
//     <Media>
//         <span className="mb-0 text-sm">
//             React Material Dashboard
//         </span>
//     </Media>
// </Media>
// </th>
// <td>$4,400 USD</td>
// <td>
// <Badge color="" className="badge-dot">
//     <i className="bg-info" />
//     on schedule
// </Badge>
// </td>
// <td>
// <div className="avatar-group">
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip226319315"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-1-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip226319315"
//     >
//         Ryan Tompson
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip711961370"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-2-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip711961370"
//     >
//         Romina Hadid
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip216246707"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-3-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip216246707"
//     >
//         Alexander Smith
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip638048561"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-4-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip638048561"
//     >
//         Jessica Doe
//     </UncontrolledTooltip>
// </div>
// </td>
// <td>
// <div className="d-flex align-items-center">
//     <span className="mr-2">90%</span>
//     <div>
//         <Progress
//             max="100"
//             value="90"
//             barClassName="bg-info"
//         />
//     </div>
// </div>
// </td>
// <td className="text-right">
// <UncontrolledDropdown>
//     <DropdownToggle
//         className="btn-icon-only text-light"
//         href="#pablo"
//         role="button"
//         size="sm"
//         color=""
//         onClick={(e) => e.preventDefault()}
//     >
//         <i className="fas fa-ellipsis-v" />
//     </DropdownToggle>
//     <DropdownMenu className="dropdown-menu-arrow" right>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Action
//         </DropdownItem>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Another action
//         </DropdownItem>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Something else here
//         </DropdownItem>
//     </DropdownMenu>
// </UncontrolledDropdown>
// </td>
// </tr>
// <tr>
// <th scope="row">
// <Media className="align-items-center">
//     <a
//         className="avatar rounded-circle mr-3"
//         href="#pablo"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             src={require("../../assets/img/theme/vue.jpg")}
//         />
//     </a>
//     <Media>
//         <span className="mb-0 text-sm">
//             Vue Paper UI Kit PRO
//         </span>
//     </Media>
// </Media>
// </th>
// <td>$2,200 USD</td>
// <td>
// <Badge color="" className="badge-dot mr-4">
//     <i className="bg-success" />
//     completed
// </Badge>
// </td>
// <td>
// <div className="avatar-group">
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip781594051"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-1-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip781594051"
//     >
//         Ryan Tompson
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip840372212"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-2-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip840372212"
//     >
//         Romina Hadid
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip497647175"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-3-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip497647175"
//     >
//         Alexander Smith
//     </UncontrolledTooltip>
//     <a
//         className="avatar avatar-sm"
//         href="#pablo"
//         id="tooltip951447946"
//         onClick={(e) => e.preventDefault()}
//     >
//         <img
//             alt="..."
//             className="rounded-circle"
//             src={require("../../assets/img/theme/team-4-800x800.jpg")}
//         />
//     </a>
//     <UncontrolledTooltip
//         delay={0}
//         target="tooltip951447946"
//     >
//         Jessica Doe
//     </UncontrolledTooltip>
// </div>
// </td>
// <td>
// <div className="d-flex align-items-center">
//     <span className="mr-2">100%</span>
//     <div>
//         <Progress
//             max="100"
//             value="100"
//             barClassName="bg-danger"
//         />
//     </div>
// </div>
// </td>
// <td className="text-right">
// <UncontrolledDropdown>
//     <DropdownToggle
//         className="btn-icon-only text-light"
//         href="#pablo"
//         role="button"
//         size="sm"
//         color=""
//         onClick={(e) => e.preventDefault()}
//     >
//         <i className="fas fa-ellipsis-v" />
//     </DropdownToggle>
//     <DropdownMenu className="dropdown-menu-arrow" right>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Action
//         </DropdownItem>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Another action
//         </DropdownItem>
//         <DropdownItem
//             href="#pablo"
//             onClick={(e) => e.preventDefault()}
//         >
//             Something else here
//         </DropdownItem>
//     </DropdownMenu>
// </UncontrolledDropdown>
// </td>
