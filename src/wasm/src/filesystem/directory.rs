// use std::cell::RefCell;
// use std::rc::Rc;
use std::sync::{Arc, Mutex};
use crate::filesystem::node::Node;

pub struct Directory {
    name: String,
    node: Arc<Mutex<Node>>,
}

impl Directory {
    // pub fn new(name: String, node: Arc<Mutex<Node>>) -> Directory {
    //     Directory {
    //         name,
    //         node,
    //     }
    // }

    // pub fn get_name(&self) -> String {
    //     self.name.clone()
    // }

    // pub fn parent_name(&self) -> Option<String> {
    //     match &self.node.borrow().get_parent() {
    //         Some(parent) => Some(parent.borrow().get_name()),
    //         None => None,
    //     }
    // }

    // pub fn get_parent(&self) -> Option<Arc<Mutex<Node>>> {
    //     match &self.node.borrow().get_parent() {
    //         Some(parent) => Some(Rc::clone(parent)),
    //         None => None,
    //     }
    // }

    // pub fn get_children(&self) -> Vec<Arc<Mutex<Node>>> {
    //     self.node.borrow().get_children().clone()
    // }

    // pub fn add_child(&mut self, child: Arc<Mutex<Node>>) {
    //     self.node.borrow_mut().get_children().push(Rc::clone(&child));
    // }
}